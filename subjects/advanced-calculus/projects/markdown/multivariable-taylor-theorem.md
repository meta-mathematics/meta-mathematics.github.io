# Multivariable Taylor Theorem

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** AC-03  
**Level:** Intermediate    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

Let $f:U\subset\mathbb R^n\to\mathbb R$ be $C^{k+1}$, with the segment from $a$ to $a+h$ in $U$. Prove $f(a+h)=\sum_{j=0}^k D^jf(a)[h,\ldots,h]/j!+\frac1{k!}\int_0^1(1-t)^kD^{k+1}f(a+th)[h,\ldots,h]\,dt$.

**Foundations and permitted imports:**

D^j f(a) denotes the symmetric j-linear derivative; D^0f=f. Import the chain rule and AC-02. The segment is contained in open U and f is C^(k+1) near it, so g(t)=f(a+th) has the necessary derivatives on a neighborhood of[0,1]. Derive the one-variable integral remainder below.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Restrict to a line
N2 [v1] One-variable integral remainder
  N1 -- E1: The directional derivative identities along the entire segment. --> N2
N3 [v1] Restore tensors and bound the error
  N1 -- E1: The directional derivative identities along the entire segment. --> N3
  N2 -- E2: The exact one-variable Taylor formula with integral remainder. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | The directional derivative identities along the entire segment. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T1-3 | N1/v1, E1 | The directional derivative identities along the entire segment. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | The exact one-variable Taylor formula with integral remainder. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Restrict to a line

**Object, role, and local target:** Reduce the multivariable increment to a scalar parameter. The required export is: The directional derivative identities along the entire segment.

**Inputs:** f∈C^(k+1); a+th∈U for 0≤t≤1; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AC-03.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain f∈C^(k+1); a+th∈U for 0≤t≤1; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Reduce the multivariable increment to a scalar parameter. |
| Sense | Endpoint-only domain membership is insufficient if the segment leaves U. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** The directional derivative identities along the entire segment. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — One-variable integral remainder

**Object, role, and local target:** Apply FTC and integrate by parts repeatedly. The required export is: The exact one-variable Taylor formula with integral remainder.

**Inputs:** g∈C^(k+1) near[0,1]; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AC-03.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain g∈C^(k+1) near[0,1]; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Apply FTC and integrate by parts repeatedly. |
| Sense | The factorial and sign follow from the integration-by-parts recursion. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** The exact one-variable Taylor formula with integral remainder. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Restore tensors and bound the error

**Object, role, and local target:** Keep all k+1 factors of h in the remainder. The required export is: Exact tensor expansion and a certified norm remainder bound.

**Inputs:** Directional identities and scalar formula; prior exports E1/v1, E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AC-03.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Directional identities and scalar formula; prior exports E1/v1, E2/v1; keep their assumptions and versions attached. |
| Intellect | Keep all k+1 factors of h in the remainder. |
| Sense | A scalar Hessian expression must not omit mixed terms or directional factors. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** Exact tensor expansion and a certified norm remainder bound. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Restrict to a line

1. Define g(t)=f(a+th).

2. Repeated chain rule along the affine path yields g^(j)(t)=D^jf(a+th)[h,…,h] for 0≤j≤k+1.

3. For j=0 this means the function itself.

4. Compactness of the segment gives a neighborhood on which these restrictions are defined; no global convexity of U is assumed.

### §4.N2 — One-variable integral remainder

1. For k=0, g(1)−g(0)=∫₀¹g′(t)dt by FTC.

2. For k≥1 integrate I_k=(1/k!)∫₀¹(1−t)^k g^(k+1)(t)dt by parts.

3. The upper boundary is 0, the lower boundary contributes−g^(k)(0)/k!, and the remaining integral is I_(k−1).

4. Hence I_k=I_(k−1)−g^(k)(0)/k!.

5. Iterating to I₀=g(1)−g(0) gives g(1)=∑_{j=0}^k g^(j)(0)/j!+I_k.

### §4.N3 — Restore tensors and bound the error

1. Substitute the node1 derivative identities into the formula to obtain exactly the asserted expansion for f(a+h).

2. If L bounds the operator norm of D^(k+1)f on the segment, the remainder has modulus at most L‖h‖^(k+1)/k! times∫₀¹(1−t)^kdt=L‖h‖^(k+1)/(k+1)!.

3. The bound is an additional reusable estimate with its explicit L; if h=0 all positive-order terms and the remainder vanish.

## 5. Worked instance and boundary audit

For f(x,y)=e^(x+y) at a=(0,0), h=(u,v), k=1, Df(a)[h]=u+v and D²f(th)[h,h]=e^(t(u+v))(u+v)². Hence e^(u+v)=1+u+v+(u+v)²∫₀¹(1−t)e^(t(u+v))dt. The remainder is at most e^|u+v|(u+v)²/2.

**Boundary or failed-argument audit:**

A first-order Taylor polynomial is generally not an exact value: f(x)=x² at 0 has zero first-order polynomial but remainder h². Sense requires the integral or a bound instead of dropping it. The theorem also cannot traverse a missing segment through a hole in U.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `AC-03`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
