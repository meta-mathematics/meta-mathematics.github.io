# Heine–Borel Theorem

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** RA-02  
**Level:** Introductory    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For $K\subset\mathbb R^n$ with its Euclidean topology, prove that $K$ is compact if and only if it is closed and bounded.

**Foundations and permitted imports:**

Use completeness of R to prove compactness of closed boxes below, the Euclidean distance, and finite-volume geometry. Compact means every open cover has a finite subcover. The proof supplies the needed closed-box lemma rather than importing Heine–Borel itself.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Closed boxes are compact
N2 [v1] Compact sets are bounded and closed
N3 [v1] Closed bounded sets are compact
  N1 -- E1: Every closed bounded box is compact. --> N3
  N2 -- E2: Compact K is closed and bounded. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-3 | N1/v1, E1 | Every closed bounded box is compact. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | Compact K is closed and bounded. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Closed boxes are compact

**Object, role, and local target:** Use nested bisection and completeness. The required export is: Every closed bounded box is compact.

**Inputs:** An open cover of a closed box in Rⁿ; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `RA-02.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain An open cover of a closed box in Rⁿ; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Use nested bisection and completeness. |
| Sense | The cover sets are open in an ambient neighborhood; nested endpoints must be retained. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** Every closed bounded box is compact. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Compact sets are bounded and closed

**Object, role, and local target:** Use a ball cover and point separation. The required export is: Compact K is closed and bounded.

**Inputs:** Compact K and Euclidean Hausdorff geometry; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `RA-02.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Compact K and Euclidean Hausdorff geometry; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Use a ball cover and point separation. |
| Sense | Boundedness alone does not supply a finite subcover. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** Compact K is closed and bounded. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Closed bounded sets are compact

**Object, role, and local target:** Adjoin the complement to an open cover. The required export is: K⊂Rⁿ is compact iff closed and bounded.

**Inputs:** Closed bounded K; compact box; prior exports E1/v1, E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `RA-02.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Closed bounded K; compact box; prior exports E1/v1, E2/v1; keep their assumptions and versions attached. |
| Intellect | Adjoin the complement to an open cover. |
| Sense | Relative open sets must be converted correctly to a cover of Q. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** K⊂Rⁿ is compact iff closed and bounded. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Closed boxes are compact

1. Suppose a box Q has an open cover with no finite subcover.

2. Bisect each side; at least one of the2ⁿ closed subboxes has no finite subcover, since otherwise their finite covers unite.

3. Continue to nested boxes Q_j whose diameters tend to 0.

4. Completeness in each coordinate supplies a common point x; it is unique by the diameter bound.

5. A covering open set contains a ball B(x,ε).

6. For large j every point of Q_j is within its diameter of x, so Q_j lies in that one set, contradiction.

7. Degenerate sides cause no difficulty.

### §4.N2 — Compact sets are bounded and closed

1. The increasing balls B(0,j), j≥1, cover K; a finite subcover places it in one sufficiently large ball.

2. For x∉K and each y∈K choose disjoint balls U_y around y and V_y around x, using distance(x,y)>0.

3. Finitely many U_y cover K.

4. The intersection of the corresponding V_y is an open neighborhood of x disjoint from K.

5. Thus the complement of K is open and K is closed.

6. The empty set satisfies both conclusions directly.

### §4.N3 — Closed bounded sets are compact

1. Place K in a closed box Q.

2. Given a relative open cover of K, represent its members as K∩O_i with ambient O_i open.

3. The O_i together with Rⁿ\K cover Q.

4. Compactness of Q yields finitely many sets; discarding the complement leaves finitely many O_i covering K.

5. This proves compactness and joins both directions of the equivalence.

## 5. Worked instance and boundary audit

For K=[0,1]², the nested-box proof applies to every open cover, not just a grid. In contrast (0,1) is covered by sets(1/j,1),j≥2 with no finite subcover; it is bounded but not closed in R.

**Boundary or failed-argument audit:**

The unit coordinate vectors e_j in the closed unit ball of ℓ² have mutual distance√2, so there is no convergent subsequence. The infinite-dimensional analogue of the box argument has no finite2ⁿ subdivision and fails. Sense preserves the finite-dimensional Euclidean scope.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `RA-02`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
