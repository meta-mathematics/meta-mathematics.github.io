# Lagrange’s Theorem

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** MA-01  
**Level:** Introductory    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For a finite group $G$ and subgroup $H\le G$, prove $|G|=[G:H]|H|$, hence $|H|$ divides $|G|$.

**Foundations and permitted imports:**

G is finite and H is a subgroup. Left cosets are sets gH={gh:h∈H}; they are not being endowed with a quotient group structure. Use group inverses, bijections, equivalence classes, and finite counting.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Cosets partition the group
N2 [v1] Equal coset sizes and counting
  N1 -- E1: The left cosets give a disjoint partition ofG. --> N2
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | The left cosets give a disjoint partition ofG. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |

## 3. Node roles and faculty activities

### N1/v1 — Cosets partition the group

**Object, role, and local target:** Characterize when two cosets intersect. The required export is: The left cosets give a disjoint partition ofG.

**Inputs:** Finite G and subgroupH; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `MA-01.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Finite G and subgroupH; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Characterize when two cosets intersect. |
| Sense | No normality is needed for this set partition. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** The left cosets give a disjoint partition ofG. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Equal coset sizes and counting

**Object, role, and local target:** Supply a bijection for each coset. The required export is: Lagrange’s formula and divisibility.

**Inputs:** Partition and left multiplication; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `MA-01.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Partition and left multiplication; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Supply a bijection for each coset. |
| Sense | Divisibility is a necessary condition for subgroup order, not a universal existence theorem. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** Lagrange’s formula and divisibility. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Cosets partition the group

1. Every g belongs togH since1∈H.

2. If gH∩kH containsx=gh₁=kh₂, then k⁻¹g=h₂h₁⁻¹∈H.

3. Therefore every gh equalsk(h₂h₁⁻¹h)∈kH, and conversely, so the two cosets are equal.

4. Thus distinct cosets are disjoint and all cosets partitionG.

### §4.N2 — Equal coset sizes and counting

1. For any g the mapH→gH, h↦gh, is surjective by definition and injective by left cancellation.

2. Every coset has|H| elements.

3. If there are[G:H] cosets, finite disjoint counting gives|G|=[G:H]|H|.

4. Thus|H| divides|G|.

5. The casesH={1} andH=G are included.

## 5. Worked instance and boundary audit

InS₃, takeH={1,(12)}, of order2. Its left cosets areH,(13)H,(23)H, each with two elements, giving6=3·2. H is not normal, which confirms that normality is unnecessary for Lagrange’s counting argument.

**Boundary or failed-argument audit:**

A proposed quotient-group multiplication on these cosets requires normality, which thisH lacks. Sense prevents a counting export from being used as a quotient-construction certificate; the partition remains valid.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `MA-01`, version 1, and the proof with every reuse. Intermediate exports E1–E2 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
