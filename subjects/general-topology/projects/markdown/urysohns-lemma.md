# Urysohn’s Lemma

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** GT-03  
**Level:** Intermediate    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For a normal $T_1$ space $X$ and disjoint closed sets $A,B$, prove a continuous $f:X\to[0,1]$ exists with $f=0$ on $A$ and $f=1$ on $B$.

**Foundations and permitted imports:**

Normal means every pair of disjoint closed sets has disjoint open neighborhoods; T₁ means points are closed. Under this convention derive the shrinking lemma below. Dyadic rationals are dense in[0,1]. The construction uses closures inX and no metric. EmptyA orB is allowed.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Normal-space shrinking lemma
N2 [v1] Nested dyadic neighborhoods
  N1 -- E1: A neighborhood whose closure stays inside the prescribed open set. --> N2
N3 [v1] Function and endpoint values
  N2 -- E2: A family with closure(U_r)⊂U_s whenever r<s. --> N3
N4 [v1] Continuity via strict level sets
  N2 -- E2: A family with closure(U_r)⊂U_s whenever r<s. --> N4
  N3 -- E3: A function into[0,1] taking the specified endpoint values. --> N4
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | A neighborhood whose closure stays inside the prescribed open set. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | A family with closure(U_r)⊂U_s whenever r<s. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |
| T2-4 | N2/v1, E2 | A family with closure(U_r)⊂U_s whenever r<s. | N4.1 | N4 inputs below; same theorem objects and assumptions | Proof §4.N2 |
| T3-4 | N3/v1, E3 | A function into[0,1] taking the specified endpoint values. | N4.1 | N4 inputs below; same theorem objects and assumptions | Proof §4.N3 |

## 3. Node roles and faculty activities

### N1/v1 — Normal-space shrinking lemma

**Object, role, and local target:** Separate F from the closed complement. The required export is: A neighborhood whose closure stays inside the prescribed open set.

**Inputs:** ClosedF inside openG; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `GT-03.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain ClosedF inside openG; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Separate F from the closed complement. |
| Sense | Disjoint open neighborhoods alone are insufficient unless the closure inclusion is obtained. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** A neighborhood whose closure stays inside the prescribed open set. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Nested dyadic neighborhoods

**Object, role, and local target:** Insert midpoint neighborhoods between neighboring dyadics. The required export is: A family with closure(U_r)⊂U_s whenever r<s.

**Inputs:** InitialU₀,U₁ and shrinking lemma; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `GT-03.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain InitialU₀,U₁ and shrinking lemma; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Insert midpoint neighborhoods between neighboring dyadics. |
| Sense | Bare inclusionsU_r⊂U_s do not supply the continuity argument. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** A family with closure(U_r)⊂U_s whenever r<s. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Function and endpoint values

**Object, role, and local target:** Encode membership by an infimum. The required export is: A function into[0,1] taking the specified endpoint values.

**Inputs:** Nested neighborhoods; prior exports E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `GT-03.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Nested neighborhoods; prior exports E2/v1; keep their assumptions and versions attached. |
| Intellect | Encode membership by an infimum. |
| Sense | The empty-infimum convention must be specified. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** A function into[0,1] taking the specified endpoint values. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

### N4/v1 — Continuity via strict level sets

**Object, role, and local target:** Prove both types of strict level sets are open. The required export is: The required continuous separator.

**Inputs:** Infimum definition and closure nesting; prior exports E2/v1, E3/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `GT-03.N4`; publish E4 only after the stated local target is established. |
| Memory | Retain Infimum definition and closure nesting; prior exports E2/v1, E3/v1; keep their assumptions and versions attached. |
| Intellect | Prove both types of strict level sets are open. |
| Sense | Superlevel openness uses closures, not just open neighborhoods. |
| Action | Execute the numbered mathematical activities in §4.N4, including its displayed identities and logical implications. |

**Export E4/v1:** The required continuous separator. Evidence is the authored argument in §4.N4, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N4 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E4, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E4. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Normal-space shrinking lemma

1. Normality gives disjoint openU,V containingF andX\G.

2. Since U⊂X\V andX\V is closed, closure(U)⊂X\V⊂G.

3. Thus F⊂U⊂closure(U)⊂G.

4. Take G=X\B andF=A to chooseU₀ withA⊂U₀⊂closure(U₀)⊂U₁=X\B.

### §4.N2 — Nested dyadic neighborhoods

1. At each finite dyadic stage, for every consecutive pairr<s already constructed chooseU_(r+s)/2 usingF=closure(U_r)⊂G=U_s.

2. Thus closure(U_r)⊂U_mid⊂closure(U_mid)⊂U_s.

3. Induction definesU_r for all dyadicr∈[0,1], and for anyr<s their levels share a sufficiently fine stage, givingclosure(U_r)⊂U_s.

4. AllU_r withr<1 lie inX\B.

### §4.N3 — Function and endpoint values

1. Let f(x)=inf{r∈D:x∈U_r}, taking the value1 if the set is empty, whereD is the set of dyadics in[0,1].

2. Then0≤f≤1.

3. Forx∈A, x∈U₀, hencef=0.

4. Forx∈B noU_r containsx, evenU₁=X\B, so f=1.

### §4.N4 — Continuity via strict level sets

1. For0<a≤1, {f<a}=∪_{r∈D,r<a}U_r: membership on either side follows from the infimum and the existence of a dyadic membership level belowa.

2. For0≤a<1, {f>a}=∪_{r∈D,a<r<1}(X\closure(U_r)).

3. Ifx is outsideclosure(U_r), it belongs to noU_s withs≤r, so f(x)≥r>a.

4. Conversely if f(x)>a choose dyadicsa<r<s<f(x), possible even whenf=1.

5. Thenx∉U_s andclosure(U_r)⊂U_s, sox lies in that open complement.

6. Level sets outside[0,1] are trivial.

7. Both strict level types are open, proving continuity and Urysohn’s lemma.

## 5. Worked instance and boundary audit

InR takeA={0},B={1}; a concrete separator is f(x)=max(0,min(1,x)). The dyadic construction is needed for arbitrary normal spaces; it need not reproduce this particular function. If A is empty the constant1 works, and ifB is empty the constant0 works.

**Boundary or failed-argument audit:**

A candidate drops closure nesting and asserts an arbitrary membership-threshold function is continuous. Sense identifies that its superlevel sets may fail to be open. Repair the neighborhood construction before publishing the function; all later continuity claims depend on it.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `GT-03`, version 1, and the proof with every reuse. Intermediate exports E1–E4 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

- [MIT Introduction to Topology: separation, Urysohn, and Tychonoff material](https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/pages/lecture-notes/).

[Branch index](../README.md)
